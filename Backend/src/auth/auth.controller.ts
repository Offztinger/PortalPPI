import { Controller, Get, Post, Redirect, Req, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';

import { AuthService } from './auth.service';
import { GoogleUser } from './types';
import { GoogleAuthGuard, LocalAuthGuard } from './guards';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Req() req: Express.Request & { user: User }) {
    return await this.authService.login(req.user.id);
  }

  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  async handleGoogleLogin() {
    return 'You are being redirected to google';
  }

  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  @Redirect()
  async handleGoogleRedirect(@Req() req: Express.Request & { user: GoogleUser }) {
    await this.authService.handleGoogleLogin(req.user.email);

    return { url: `${process.env.FRONT_URL}` };
  }
}
