// import { Input } from '@chakra-ui/react'
import { Flex, Spacer, Box, useToast } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useLoginStore } from "../../store/useLogin";
import { shallow } from "zustand/shallow";
import { requies } from "../../server";
import { useEffect, useState } from "react";

// import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css'
export interface IPortfolioData {
  _id: string;
  name: string;
  description: string;
  photo: Photo;
  url: string;
  user: any;
  __v: number;
}

export interface Photo {
  _id: string;
  name: string;
  user: string;
  __v: number;
}

const Addport = () => {
  const [userInfo] = useLoginStore((s) => [s.userInfo], shallow);
  const [portfolioData, setPortfolio] = useState([]);

  const [dataFoms, setDataFoms] = useState({
    name: "",
    url: "",
    description: "",
    photo: "",
  });
  console.log(portfolioData, "asda");

  const toast = useToast();
  //  eslint-disable-next-line
  const uploadImg = async (event: any) => {
    const formData = new FormData();

    formData.append("file", event);
    const response = await requies.post("/upload", formData);
    console.log("response", response);
    if (response.status === 201) {
      setDataFoms((prevFormData) => ({
        ...prevFormData,
        photo: response?.data?._id,
      }));
      toast({
        title: "Account created.",
        description: "Image uploud successfully",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
    return response;
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      if (event.target.files[0]) {
        uploadImg(event.target.files[0]);
      }
    }
  };

  const getData = async () => {
    const res = await requies.get("/portfolios", {
      data: { page: 1, user: userInfo._id, limit: 5 },
    });
    setPortfolio(res.data.data);
  };

  useEffect(() => {
    getData();
  }, [userInfo._id]);

  const addPortfolio = async () => {
    const formData = new FormData();
    formData.append("name", dataFoms.name);
    formData.append("url", dataFoms.url);
    formData.append("description", dataFoms.description);
    formData.append("photo", dataFoms.photo);
    const { status } = await requies.post(`portfolios`, formData);
    if (status === 201) {
      toast({
        title: "Account created.",
        description: "Portfolio uploud successfully",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      getData();
      setDataFoms({
        name: "",
        url: "",
        description: "",
        photo: "",
      });
    }
  };
  //  eslint-disable-next-line
  const edits = async (id: any) => {
    try {
      const { data } = await requies.get(`portfolios/${id}`);
      const { name, url, description } = data;

      setDataFoms({
        name,
        url,
        description,
        photo: "",
      });
      getData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setDataFoms((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const deletes = async (id: string) => {
    await requies.delete(`portfolios/${id}`);
    getData();
  };

  return (
    <div>
      <Flex>
        <Box p="4" width={"100%"}>
          <div>
            <Box className="box-list" textAlign="center" color="#ffff">
              Add Your <span className="boxchakx">Portfolio</span>
            </Box>
            <span className="boxchak" style={{ color: "" }}>
              Name
            </span>
            <input type="text" name="name" value={dataFoms.name} onChange={handleInputChange} placeholder="Name" style={{ width: "95%" }} />

            <input type="text" name="url" value={dataFoms.url} onChange={handleInputChange} placeholder="Url" style={{ width: "95%" }} />

            <input
              type="text"
              name="description"
              value={dataFoms.description}
              onChange={handleInputChange}
              placeholder="Description"
              style={{ width: "95%" }}
            />
            <span className="boxchak" style={{ color: "" }}>
              Photo
            </span>
            <div className="input-group mb-3">
              <input type="file" name="photo" className="form-control" id="inputGroupFile01" onChange={handleFileChange} />
            </div>
            <Button type="submit" className="boxchak" onClick={addPortfolio} colorScheme="blue">
              Add Experience
            </Button>
          </div>
        </Box>
        <Spacer />
      </Flex>
      <Box className="box-list" textAlign={"center"} color={"#ffff"}>
        <span className="boxchakx">MY PROJECTS</span>{" "}
      </Box>

      <Flex>
        <div className="condainer con-winz">
          {portfolioData.map((item: IPortfolioData) => (
            <div className="box-portfoli" key={item?._id}>
              <img src={`https://ap-portfolio-backend.up.railway.app/upload/${item.photo._id}.${item.photo.name.split(".")[1]}`} alt="Foto" />
              <h1>{item?.name}</h1>
              <p>
                <span className="text-primary"> Portfolio Title:</span> {item.description}
              </p>
              <p>
                <span className="text-primary"> Portfolio url: </span> {item.url}
              </p>
              <a href=""></a>
              <button type="button" className="btn btn-success" onClick={() => edits(item._id)} style={{ marginRight: "20px" }}>
                edit{" "}
              </button>

              <button type="button" className="btn btn-danger" onClick={() => deletes(item._id)}>
                delete{" "}
              </button>
              <hr className="color-white" />
            </div>
          ))}
          <ul className="pagination pagination-lg">
            <li className="page-item">
              <a className="page-link" href="#">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </div>
        <Spacer />
      </Flex>
    </div>
  );
};

export default Addport;
