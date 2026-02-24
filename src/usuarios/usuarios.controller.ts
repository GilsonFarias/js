import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, NotFoundException } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('usuarios')
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @ApiOperation({ summary: 'Criar usuário' })
  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }

  @ApiOperation({ summary: 'Lista todos os usuário' })
  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  @ApiOperation({ summary: 'Consulta usuário por id' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const usuario = await this.usuariosService.findOne(+id);
    if(!usuario) throw new NotFoundException();
    return usuario;
  }

  @ApiOperation({ summary: 'Altera usuário' })
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    const usuario = await this.usuariosService.update(+id, updateUsuarioDto);
    if(!usuario) throw new NotFoundException();
  }

  @ApiOperation({ summary: 'Deleta usuário' })
  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const usuario = await this.usuariosService.remove(+id);
    if(!usuario) throw new NotFoundException();
  }
}
