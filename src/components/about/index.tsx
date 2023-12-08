import {
  Input,
  Progress,
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
  workName: string;
  companyName: string;
  description: string;
  startDate: string;
  endDate: string;
  user: User;
  __v: number;
}

export interface User {
  role: string;
  fields: any[];
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
const About = () => {
  const [userInfo] = useLoginStore((s) => [s.userInfo], shallow);
  const [page, setPage] = useState(0);
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
  const [experiencesPage, setExperiencePage] = useState([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selected, setSelected] = useState<File | null>(null);
  const toast = useToast();
  const [datafoms, setdataFoms] = useState({
    companyName: "",
    name: "",
    url: "",
    firstName: "",
    description: "",
    photo: null,
  });

  // const toast = useToast();

  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.files && event.target.files.length > 0) {
  //     setSelectedFile(event.target.files[0]);
  //   }
  // };

  const getData = async () => {
    const res = await requies.get("/experiences", {
      page: page,
      user: userInfo._id,
      limit: 5,
    });
    console.log(res);
    setExperience(res.data.data);
    setExperiencePage(res.data.pagination);
  };

  useEffect(() => {
    getData();
  }, [page, userInfo._id]);

  const addExp = async () => {
    const formData = new FormData();
    formData.append("companyName", experiences.company);
    formData.append("workName", experiences.yourPostion);
    formData.append("description", experiences.description);
    formData.append("startDate", experiences.startDate);
    formData.append("endDate", experiences.endDate);

    const { data, status } = await requies.post(`experiences`, formData);
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
      const { data, status } = await requies.put(
        `experiences/${experiences._id}`,
        formData
      );

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

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setdataFoms((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const deletes = async (id: string) => {
    await requies.delete(`experiences/${id}`);
    getData();
  };
  console.log("experiences", experiences);
  return (
    <div>
      <Flex>
        <Box p="4" width={"100%"}>
          <Box
            backgroundColor={"#a0aec0"}
            width={"98%"}
            borderRadius={"10px"}
            padding={"15px"}
            height={"673px"}
          >
            <Box className="box-list" textAlign={"center"} color={"#ffff"}>
              Add Your <span className="boxchakx">Experience</span>{" "}
            </Box>
            <span className="boxchak" color="">
              Your Position
            </span>
            <Input
              variant="flushed"
              placeholder="Your Position"
              size="md"
              width={"95%"}
              onChange={(e: { target: { value: string } }) =>
                setExperiences({ ...experiences, yourPostion: e.target.value })
              }
            />
            <span className="boxchak" color="">
              Company
            </span>
            <Input
              variant="flushed"
              placeholder="Company name"
              size="md"
              width={"95%"}
              onChange={(e: { target: { value: string } }) =>
                setExperiences({ ...experiences, company: e.target.value })
              }
            />
            <span className="boxchak" color="">
              Description
            </span>
            <Input
              height={"150px"}
              variant="flushed"
              placeholder="Description"
              size="md"
              width={"95%"}
              onChange={(e: { target: { value: string } }) =>
                setExperiences({ ...experiences, description: e.target.value })
              }
            />
            <span className="boxchak" color="">
              Start Date
            </span>
            <Input
              placeholder="Select Date and Time"
              size="md"
              type="datetime-local"
              onChange={(e: { target: { value: string } }) =>
                setExperiences({ ...experiences, startDate: e.target.value })
              }
            />
            <span className="boxchak" color="">
              Start Date
            </span>
            <Input
              placeholder="Select Date and Time"
              size="md"
              type="datetime-local"
              onChange={(e: { target: { value: string } }) =>
                setExperiences({ ...experiences, endDate: e.target.value })
              }
            />
            <p></p>
            <Button className="boxchak" colorScheme="blue" onClick={addExp}>
              Add Experience
            </Button>
          </Box>
        </Box>
        <Spacer />
      </Flex>
      <Flex>
        <Box p="4" width={"100%"}>
          <Box
            backgroundColor={"#a0aec0"}
            width={"98%"}
            borderRadius={"10px"}
            padding={"15px"}
            minHeight={"503px"}
          >
            <Box className="box-list" textAlign={"center"} color={"#ffff"}>
              Experience List
            </Box>
            <Box>
              {experiencesData?.map((item: any) => (
                <div className="box-portfoli" key={item._id}>
                  <h1>{item.name}</h1>
                  <p>
                    <span className="text-primary"> Company : </span>{" "}
                    {item.companyName}
                  </p>
                  <p>
                    <span className="text-primary"> Portfolio Title:</span>{" "}
                    {item.description}
                  </p>
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

                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deletes(item._id)}
                  >
                    delete{" "}
                  </button>
                  <hr className="color-white" />
                </div>
              ))}
            </Box>
            <span className="boxchak" color="">
              {/* Company:{" "} */}
            </span>
            <br />
            <p></p>

            <span className="boxchak" color="">
              {/* Position:{" "} */}
            </span>
            <br />
            <p></p>

            <span className="boxchak" color="">
              {/* Your Description: */}
            </span>
            <br />
            <p></p>
            <span className="boxchak" color="">
              {/* Start Date:{" "} */}
            </span>
            <br />
            <p></p>
            {/* <Input  variant='flushed' placeholder='Position:' size='md' width={"95%"}/>  */}
            <span className="boxchak" color="">
              {/* Start Date: */}
            </span>
            <br />
            <p></p>
            {/* <Input  height={"150px"} variant='flushed' placeholder='Your Description:' size='md' width={"95%"}/>  */}
          </Box>
        </Box>
        <Spacer />
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
              onChange={(e: { target: { value: stirng } }) =>
                setExperiences({ ...experiences, yourPostion: e.target.value })
              }
            />
            <Input
              placeholder="Company"
              size="md"
              value={experiences.company}
              width={"95%"}
              onChange={(e: { target: { value: stirng } }) =>
                setExperiences({ ...experiences, company: e.target.value })
              }
            />
            {/* <Input
              placeholder="Description"
              size="md"
              value={experiences.description}
              width={"95%"}
              onChange={(e: { target: { value: stirng } }) =>
                setExperiences({ ...experiences, description: e.target.value })
              }
            /> */}
            <Input
              placeholder="Start Date"
              size="md"
              value={experiences.startDate}
              width={"95%"}
              type="datetime-local"
              onChange={(e: { target: { value: stirng } }) =>
                setExperiences({ ...experiences, startDate: e.target.value })
              }
            />

            <Input
              placeholder="End Date"
              size="md"
              value={experiences.endDate}
              width={"95%"}
              type="datetime-local"
              onChange={(e: { target: { value: stirng } }) =>
                setExperiences({ ...experiences, endDate: e.target.value })
              }
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
    </div>
  );
};

export default About;
