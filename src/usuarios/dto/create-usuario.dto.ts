import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsDateString, maxLength, MaxLength, IsNotEmpty, Matches, IsNumberString, Length } from 'class-validator';

export class CreateUsuarioDto {
    Id: number

    @ApiProperty({ example: 'João Silva' })
    @IsNotEmpty({ message: 'Nome é obrigatório' })
    @IsString({ message: 'Nome deve ser texto' })
    @Matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, {
        message: 'Nome deve conter apenas letras'
    })
    Nome: string;

    @ApiProperty({ example: 'João@gmail.com' })
    @IsNotEmpty({ message: 'Email é obrigatório' })
    @IsEmail({}, { message: 'Email inválido' })
    Email: string;

    @ApiProperty({ example: '12654' })
    @IsNotEmpty({ message: 'Matrícula é obrigatória' })
    @IsNumberString({}, { message: 'Matrícula deve conter apenas números' })
    matricula: string;

    @ApiProperty({ example: '124598' })
    @IsNotEmpty({ message: 'Senha é obrigatória' })
    @IsString({ message: 'Senha deve ser texto' })
    @Length(6, 6, {
        message: 'Senha deve conter exatamente 6 caracteres'
    })
    Senha: string;
}
