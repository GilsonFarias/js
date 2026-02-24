import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsuariosService {

  constructor(
    @InjectRepository(Usuario)
    private readonly repository: Repository<Usuario>){}

  create(createUsuarioDto: CreateUsuarioDto) {
    const usuario = this.repository.create(createUsuarioDto);
    return this.repository.save(usuario)
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({id});
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const usuario = await this.repository.findOneBy({id});
    if(!usuario) return null;
    this.repository.merge(usuario, updateUsuarioDto)
    return this.repository.save(usuario);
  }

  async remove(id: number) {
    const usuario = await this.repository.findOneBy({id});
    if(!usuario) return null;
    return this.repository.remove(usuario);
  }
}
