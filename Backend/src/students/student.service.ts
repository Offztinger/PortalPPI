import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/core/database/prisma/prisma.service";
import { UserDTO } from "src/dto/UserDTO";


@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) { }

  async createStudent(data: UserDTO) {
    return this.prisma.user.create({
      data,
    });
  }

  async findAllStudents() {
    return (await this.prisma.user.findMany()).filter(
      (user) => user.idRole === 'cefe8960-b841-4a4a-afcc-4f1266b512b8',
    );
  }

  async findStudentById(id: string) {

    const studentById = await this.prisma.user.findUnique({
      where: { id },
    });

    if (studentById?.idRole !== 'cefe8960-b841-4a4a-afcc-4f1266b512b8') {
      return "No hay ningun estudiante con ese id";
    } else {
      return studentById;
    }

  }

  async updateStudent(id: string, data: UserDTO) {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async deleteStudent(id: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}