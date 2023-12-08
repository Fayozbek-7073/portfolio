// import { Input } from '@chakra-ui/react'
// import { Flex, Spacer,Box} from '@chakra-ui/react'
// import { Button,  } from '@chakra-ui/react'
import { Wrap, WrapItem } from "@chakra-ui/react";

import {
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
  Button,
  Flex,
  Spacer,
  Box,
} from "@chakra-ui/react";
import { useLoginStore } from "../../store/useLogin";
import { shallow } from "zustand/shallow";
import { requies } from "../../server";
import { useEffect, useState } from "react";

export interface IExperiences {
  _id: string;
  name: string;
  level: string;
  description: string;
  startDate: string;
  endDate: string;
  user: User;
  __v: number;
}

export interface User {
  role: string;
  fields: [];
  client: boolean;
  _id: string;
  firstName: string;
  lastName: string;
  username: string;
  info: string;
  phoneNumber: string;
  birthday: string;
  address: string;
  email: string;
  github: string;
  telegram: string;
  instagram: string;
  youtube: string;
  facebook: string;
  photo: string;
  createdAt: string;
  __v: number;
}
interface IExperiencesData {
  yourPostion: string;
  company: string;
  description: string;
  startDate: string;
  endDate: string;
  _id: string;
}

const Education = () => {
  const [userInfo] = useLoginStore((s) => [s.userInfo], shallow);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [experiences, setExperiences] = useState<IExperiencesData>({
    yourPostion: "",
    company: "",
    description: "",
    startDate: "",
    endDate: "",
    _id: "",
  });
  const [experiencesData, setExperience] = useState<IExperiences[]>([]);
  const toast = useToast();

  const getData = async () => {
    const res = await requies.get("/education", {
      page: 1,
      user: userInfo._id,
      limit: 5,
    });
    console.log(res);
    setExperience(res.data.data);
  };

  useEffect(() => {
    getData();
  }, [userInfo._id]);

  const addExp = async () => {
    const formData = new FormData();
    formData.append("companyName", experiences.company);
    formData.append("workName", experiences.yourPostion);
    formData.append("description", experiences.description);
    formData.append("startDate", experiences.startDate);
    formData.append("endDate", experiences.endDate);

    const { data, status } = await requies.post(`education`, formData);
    console.log("datadata", data, status);
    if (status === 201) {
      toast({
        title: "Account created.",
        description: "Experiences Add successfully",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      getData();
      setExperiences({
        yourPostion: "",
        company: "",
        description: "",
        startDate: "",
        endDate: "",
        _id: "",
      });
    }
  };

  const edits = async () => {
    try {
      const formData = new FormData();
      formData.append("companyName", experiences.company);
      formData.append("workName", experiences.yourPostion);
      formData.append("description", experiences.description);
      formData.append("startDate", experiences.startDate);
      formData.append("endDate", experiences.endDate);
      const { status } = await requies.put(`education/${experiences._id}`, formData);

      if (status === 200) {
        toast({
          title: "Account created.",
          description: "Experiences Update successfully",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        getData();
        setExperiences({
          yourPostion: "",
          company: "",
          description: "",
          startDate: "",
          endDate: "",
          _id: "",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deletes = async (id: string) => {
    await requies.delete(`education/${id}`);
    getData();
  };
  console.log("experiences", experiences);
  return (
    <div>
      <Flex>
        <Wrap>
          <Box p="4" width={"100%"}>
            <Box backgroundColor={"#a0aec0"} width={"98%"} borderRadius={"10px"} padding={"15px"} height={"673px"}>
              <Box className="box-list" textAlign={"center"} color={"#ffff"}>
                Add Your <span className="boxchakx">Education</span>{" "}
              </Box>

              <span className="boxchak" color="">
                Education Name
              </span>
              <Input
                variant="flushed"
                placeholder="Education Name"
                size="md"
                width={"95%"}
                onChange={(e: { target: { value: string } }) => setExperiences({ ...experiences, name: e.target.value })}
              />
              <span className="boxchak" color="">
                Start Date
              </span>
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
                onChange={(e: { target: { value: string } }) => setExperiences({ ...experiences, startDate: e.target.value })}
              />
              <span className="boxchak" color="">
                Start Date
              </span>
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
                onChange={(e: { target: { value: string } }) => setExperiences({ ...experiences, endDate: e.target.value })}
              />
              <span className="boxchak" color="">
                Education Level
              </span>
              <Input
                variant="flushed"
                placeholder="Education Level"
                size="md"
                width={"95%"}
                onChange={(e: { target: { value: string } }) => setExperiences({ ...experiences, endDate: e.target.value })}
              />
              <span className="boxchak" color="">
                Description
              </span>
              <Input
                height={"150px"}
                variant="flushed"
                placeholder="Text here..."
                size="md"
                width={"95%"}
                onChange={(e: { target: { value: string } }) => setExperiences({ ...experiences, endDate: e.target.value })}
              />
              <p></p>
              <Button className="boxchak" colorScheme="blue" onClick={addExp}>
                Add Experience
              </Button>
            </Box>
          </Box>
          <Spacer />
          <WrapItem>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {experiencesData?.map((item: any) => (
                <div className="col">
                  <div className="card h-100 card-education">
                    <img src="/src/img/my/favicon.png" className="card-img-top" alt="F" />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">Start Date: {item.startDate}</p>
                      <p className="card-text">End Date: {item.endDate}</p>
                      <p className="card-text">Level: {item.level} </p>
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => {
                          setExperiences({
                            yourPostion: item.workName,
                            company: item.companyName,
                            description: item.description,
                            startDate: item.startDate,
                            endDate: item.endDate,
                            _id: item._id,
                          });
                          onOpen();
                        }}
                        style={{ marginRight: "20px" }}
                      >
                        edit{" "}
                      </button>

                      <button type="button" className="btn btn-danger" onClick={() => deletes(item._id)}>
                        delete{" "}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </WrapItem>
        </Wrap>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Your Postion"
              value={experiences.yourPostion}
              size="md"
              width={"95%"}
              onChange={(e: { target: { value: string } }) => setExperiences({ ...experiences, yourPostion: e.target.value })}
            />
            <Input
              placeholder="Company"
              size="md"
              value={experiences.company}
              width={"95%"}
              onChange={(e: { target: { value: string } }) => setExperiences({ ...experiences, company: e.target.value })}
            />

            <Input
              placeholder="Start Date"
              size="md"
              value={experiences.startDate}
              width={"95%"}
              type="datetime-local"
              onChange={(e: { target: { value: string } }) => setExperiences({ ...experiences, startDate: e.target.value })}
            />

            <Input
              placeholder="End Date"
              size="md"
              value={experiences.endDate}
              width={"95%"}
              type="datetime-local"
              onChange={(e: { target: { value: string } }) => setExperiences({ ...experiences, endDate: e.target.value })}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" onClick={edits}>
              Edit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <div className="bg-it"></div>
    </div>
  );
};

export default Education;
