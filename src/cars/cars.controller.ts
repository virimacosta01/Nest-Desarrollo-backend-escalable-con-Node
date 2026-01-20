/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

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
  getCarById( @Param('id') id: string) {

    console.log({id})
    return this.CarsService.findOneById(id)
  }

  @Post()
  createCar(@Body() body:any){
    return body;
  }

  @Patch(':id')
  updateCar(@Body() body:any){
    return body;
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id:number){
    console.log({id})
    return{
      method:'DELETE',
      id
    }
  }
  
}
