import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) return value;

    const object = plainToInstance(metatype, value);
    const errors = await validate(object);

    console.log(errors);
    if (errors.length > 0) throw new BadRequestException('Validation failed');
    return value;
  }

  private toValidate(metatype: Function): Boolean {
    const types: Function[] = [String, Boolean, Array, Number, Object]; // Native JS type
    return !types.includes(metatype);
  }
}
