import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginResponseDto } from './dto/login-response.dto';
import { LoginDto } from './dto/login.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary:"Rota para o login do usuário recebendo um token de autenticação"
  })
  login(@Body() loginDto: LoginDto): Promise<LoginResponseDto>{
    return this.authService.login(loginDto)

    }
  }

