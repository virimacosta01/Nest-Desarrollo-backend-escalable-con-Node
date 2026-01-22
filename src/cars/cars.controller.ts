/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {

  constructor(
    private readonly CarsService: CarsService
  ){}


  @Get()
  getAllCars() {
    return this.CarsService.findAll()
  }

  @Get(':id')  //
  getCarById( @Param('id', ParseUUIDPipe) id: string) {

    console.log({id})
    return this.CarsService.findOneById(id)
  }

  @Post()
  // @UsePipes(ValidationPipe)
  createCar(@Body() createCarDto: CreateCarDto){
    return this.CarsService.create(createCarDto);
  }

  @Patch(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id:string,
    @Body() updateCarDto:UpdateCarDto)
  {
    return this.CarsService.update(id, updateCarDto);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id:string){
    console.log({id})
    return this.CarsService.delete(id)
  }
  
}
