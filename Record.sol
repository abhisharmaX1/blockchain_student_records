// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.19;

contract StudentManagement {
    struct Student {
        uint id;
        string name;
        uint age;
        string branch;
    }

    mapping (uint => Student) public students;
    uint public studentsCount;

    function addStudent(string memory _name, uint _age, string memory _branch) public {
        studentsCount++;
        students[studentsCount] = Student(studentsCount, _name, _age, _branch);
    }

    function getStudent(uint _id) public view returns (uint, string memory, uint, string memory) {
        return (students[_id].id, students[_id].name, students[_id].age, students[_id].branch);
    }

    function updateStudent(uint _id, string memory _name, uint _age, string memory _branch) public {
        students[_id] = Student(_id, _name, _age, _branch);
    }

    function deleteStudent(uint _id) public {
        delete students[_id];
    }
}