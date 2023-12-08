import { Center, Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { requies } from "../../server";
import { useEffect, useState } from "react";

export interface ITexperiences {
  answer: string;
  show: string[];
  _id: string;
  title: string;
  message: string;
  whom: string[];
  user: string;
  __v: number;
}

const Testimonials = () => {
  const [experiencesData, setExperience] = useState<ITexperiences[]>([]);

  const getData = async () => {
    const res = await requies.get("/messages");
    setExperience(res.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Center>
        <Box boxSize="2xl">
          <Image marginTop={"19px"} borderRadius={"5%"} src="https://stage.readycloud.com/wp-content/uploads/2020/01/header.jpg" alt="Dan Abramov" />
        </Box>
      </Center>

      {experiencesData?.map((item: ITexperiences) => (
        <div className="box-portfoli" key={item._id}>
          <div className="container card mb-3 crad-bots crad-botsz">
            <div className="row g-0">
              <div className="col-md-4 p-2">
                <img
                  src="https://www.pinclipart.com/picdir/big/38-388919_computer-icons-user-profile-clip-art-avatar-user.png"
                  className="img-fluid rounded-start"
                  alt="User"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{item.answer}</h5>
                  <p className="card-text">{item.message}</p>
                  <p className="card-text"></p>
                  <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                    Replay
                  </button>

                  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1 className="modal-title fs-5" id="exampleModalLabel">
                            New message
                          </h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          <form>
                            <div className="mb-3">
                              <label htmlFor="message-text" className="col-form-label">
                                Unswer Message:
                              </label>
                              <textarea className="form-control" id="message-text"></textarea>
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Send message
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
