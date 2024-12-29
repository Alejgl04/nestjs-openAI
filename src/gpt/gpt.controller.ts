import { Controller, Post, Body } from '@nestjs/common';
import { GptService } from './gpt.service';
import { OrthographyDto } from './dto';

@Controller('gpt')
export class GptController {
  constructor(private readonly gptService: GptService) {}

  @Post('ortography-check')
  orthographyCheck(@Body() orthographyDto: OrthographyDto) {
    return this.gptService.orthographyCheck(orthographyDto);
  }
}