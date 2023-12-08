import { Input } from "@chakra-ui/react";
import { Flex, Spacer, Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { requies } from "../../server";
import { useEffect, useState } from "react";
// import { Center, Image } from "@chakra-ui/react";

export interface AdminProfile {
  role: string;
  fields: string[];
  client: boolean;
  _id: string;
  firstName: string;
  lastName: string;
  username: string;
  createdAt: string;
  __v: number;
  address: string;
  birthday: string;
  email: string;
  facebook: string;
  github: string;
  info: string;
  instagram: string;
  phoneNumber: string;
  telegram: string;
  youtube: string;
  photo: string;
}

const contact = () => {
  const [experiencesData, setExperience] = useState<AdminProfile[]>([]);
  const [experiencesPage, setExperiencePage] = useState([]);
  const getData = async () => {
    const res = await requies.get("/auth/me");

    setExperience(res.data);

    console.log(res);
  };

  useEffect(() => {
    getData();
  }, []);
  
  console.log("experiencesData", experiencesData);
  console.log("experiencesPage", experiencesPage);

  return (
    <div>
      {" "}
      <Flex>
        <Box p="4" width={"100%"}>
          <Box
            backgroundColor={"#a0aec0"}
            width={"98%"}
            borderRadius={"10px"}
            padding={"15px"}
            height={"1273px"}
          >
            <Box className="box-list" textAlign={"center"} color={"#ffff"}>
              <span className="boxchakx">Edit Your Information</span>{" "}
            </Box>
            <span className="boxchak" color="">
              Name
            </span>
            <Input
              variant="flushed"
              placeholder="First Name"
              size="md"
              value={experiencesData.firstName}
              width={"95%"}
            />
            <span className="boxchak" color="">
              {/* {item.lastName} */}Last Name
            </span>
            <Input
              variant="flushed"
              placeholder=""
              value={experiencesData.lastName}
              size="md"
              width={"95%"}
            />
            <span className="boxchak" color="">
              {/* {item.username} */}
            </span>
            {/* <Input
                    variant="flushed"
                    placeholder="Fields"
                    size="md"
                    width={"95%"}
                  /> */}
            <span className="boxchak" color="">
              {/* {item.info} */}Info
            </span>
            <Input
              variant="flushed"
              placeholder=""
              size="md"
              width={"95%"}
              value={experiencesData.info}
            />
            <span className="boxchak" color="">
              {/* {item.instagram} */}Instagram
            </span>
            <Input
              variant="flushed"
              placeholder=""
              value={experiencesData.instagram}
              size="md"
              width={"95%"}
            />
            <span className="boxchak" color="">
              Photo
            </span>
            <div className="input-group mb-3">
              {/* <label className="input-group-text" for="inputGroupFile01">Upload</label> */}
              <input
                type="file"
                className="form-control"
                id="inputGroupFile01"
              />
            </div>
            <span className="boxchak" color="">
              {/* {item.phoneNumber} */}Phone Number
            </span>
            <Input
              variant="flushed"
              placeholder=""
              value={experiencesData.phoneNumber}
              size="md"
              width={"95%"}
            />
            <span className="boxchak" color="">
              {/* {item.birthday} */}Birthday
            </span>
            <Input
              placeholder=""
              size="md"
              value={experiencesData.birthday}
              type="datetime-local"
            />
            <span className="boxchak" color="">
              {/* {item.address} */}Address
            </span>
            <Input
              variant="flushed"
              placeholder=""
              value={experiencesData.address}
              size="md"
              width={"95%"}
            />
            <span className="boxchak" color="">
              {/* {item.email} */}Email
            </span>
            <Input
              variant="flushed"
              placeholder=""
              value={experiencesData.email}
              size="md"
              width={"95%"}
            />
            <span className="boxchak" color="">
              {/* {item.github} */}GitHub
            </span>
            <Input
              variant="flushed"
              placeholder=""
              value={experiencesData.github}
              size="md"
              width={"95%"}
            />
            <span className="boxchak" color="">
              {/* {item.telegram} */}Telegram
            </span>
            <Input
              variant="flushed"
              placeholder=""
              value={experiencesData.telegram}
              size="md"
              width={"95%"}
            />
            <p></p>
            <Button className="boxchak" colorScheme="blue">
              Add Experience
            </Button>
          </Box>
        </Box>

        <Spacer />
      </Flex>
    </div>
  );
};

export default contact;
