import { useState, useEffect } from "react";
import { requies } from "../../server/index.js";
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
} from "@chakra-ui/react";
import { Flex, Spacer, Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { shallow } from "zustand/shallow";
import { useLoginStore } from "../../store/useLogin";

interface IEdit {
  name: string;
  id: string;
  precents: string;
  delete: boolean;
}
const skill = () => {
  const [userInfo] = useLoginStore((s) => [s.userInfo], shallow);
  const toast = useToast();
  const [skillData, setSkillData] = useState([]);

  const [skillEdit, setSkillEdit] = useState<IEdit>({
    name: "",
    id: "",
    precents: "",
    delete: false,
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const getData = async () => {
    const res = await requies.get("/skills", {
      page: 1,
      user: userInfo._id,
      limit: 5,
    });
    setSkillData(res.data);
  };

  useEffect(() => {
    getData();
  }, [userInfo._id]);

  const editSkill = async () => {
    const res = await requies.put(`/skills/${skillEdit?.id}`, {
      name: skillEdit.name,
      percent: skillEdit.precents,
    });
    if (res.status === 200) {
      onClose();
      toast({
        title: "Account created.",
        description: "Skill updated successfully",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      getData();
    }
  };

  const deleteSkill = async () => {
    const res = await requies.delete(`/skills/${skillEdit?.id}`);
    if (res.status === 200) {
      onClose();
      toast({
        title: "Account created.",
        description: "Skill delete successfully",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      getData();
    }
  };
  const skillCreate = async () => {
    console.log(skillEdit);
    const res = await requies.post(`/skills`, {
      name: skillEdit.name,
      percent: skillEdit.precents,
    });
    console.log("object", res);
    if (res.status === 201) {
      onClose();
      toast({
        title: "Account created.",
        description: "Skill Add successfully",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      getData();
      setSkillEdit({
        name: "",
        id: "",
        precents: "",
        delete: false,
      });
    }
  };

  return (
    <div>
      <Flex>
        <Box p="4" width={"50%"}>
          <Box backgroundColor={"#a0aec0"} width={"98%"} borderRadius={"10px"} padding={"15px"} height={"333px"}>
            <Box className="box-list" textAlign={"center"} color={"#ffff"}>
              Create Skill <span className="boxchakx">Skill</span>{" "}
            </Box>
            <span className="boxchak" color="">
              Skill Name:
            </span>
            <Input
              placeholder="Skill Name"
              size="md"
              width={"95%"}
              onChange={(e: { target: { value: string } }) => setSkillEdit({ ...skillEdit, name: e.target.value })}
            />

            <Input
              placeholder="Skill Percent"
              size="md"
              width={"95%"}
              onChange={(e: { target: { value: string } }) => setSkillEdit({ ...skillEdit, precents: e.target.value })}
            />

            <Button className="boxchak" colorScheme="blue" onClick={skillCreate}>
              Create Skill
            </Button>
          </Box>
        </Box>
        <Spacer />
        <Box p="4" width={"60%"}>
          <Box backgroundColor={"#a0aec0"} width={"98%"} borderRadius={"10px"} padding={"15px"} height={"700px"} overflow={"scroll"}>
            <Box className="box-list" textAlign={"center"} color={"#ffff"}>
              Skills <span className="boxchakx">List</span>{" "}
            </Box>
            {skillData?.data?.map((item) => (
              <Box>
                <p>
                  <span className="boxchak" color="">
                    {item.name}
                  </span>
                </p>
                <span className="boxchak" color="">
                  <Progress value={item.percent} />
                  Percent:<span className="reds"> {item.percent}</span>
                </span>
                <Button
                  margin={"0px 10px"}
                  colorScheme="teal"
                  size="xs"
                  onClick={() => {
                    setSkillEdit({
                      name: item.name,
                      precents: item.percent,
                      id: item._id,
                      delete: false,
                    });
                    onOpen();
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fill-rule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                    />
                  </svg>
                </Button>
                <Button
                  height={"25px"}
                  colorScheme="red"
                  onClick={() => {
                    setSkillEdit({
                      name: item.name,
                      precents: item.percent,
                      id: item._id,
                      delete: true,
                    });
                    onOpen();
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                  </svg>
                </Button>
                <hr />
              </Box>
            ))}
            <ul className="pagination pagination-lg">
              <li className="page-item">
                <a className="page-link" href="#">
                  {"<"}
                </a>
              </li>

              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>

              <li className="page-item">
                <a className="page-link" href="#">
                  {">"}
                </a>
              </li>
            </ul>

            <p></p>
          </Box>
        </Box>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{skillEdit.delete ? "Delete" : "Edit"} Skill</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {skillEdit.delete ? (
              <>
                <h2>{skillEdit.name}</h2>
              </>
            ) : (
              <>
                <Input
                  placeholder="Skill Name"
                  value={skillEdit.name}
                  size="md"
                  width={"95%"}
                  onChange={(e: { target: { value: string } }) => setSkillEdit({ ...skillEdit, name: e.target.value })}
                />
                <Input
                  placeholder="Skill Percent"
                  size="md"
                  value={skillEdit.precents}
                  width={"95%"}
                  onChange={(e: { target: { value: string } }) => setSkillEdit({ ...skillEdit, precents: e.target.value })}
                />
              </>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            {skillEdit.delete ? (
              <Button variant="ghost" onClick={deleteSkill}>
                Delete
              </Button>
            ) : (
              <Button variant="ghost" onClick={editSkill}>
                Edit
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default skill;
