/* eslint-disable prettier/prettier */

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CatsService } from './cats.service';
import { CatType } from './create-cat.dto';
import { CatInput } from './cat.input';

@Resolver()
export class CatsResolver {
  constructor(
    private readonly catsService: CatsService,
  ) { }
  @Query(() => String)
  async hello() {
    return 'hello'
  }
  @Query(() => [CatType])
  async cats() {
    return this.catsService.findAll();
  }
  // @Query(() => CatType)
  // async cat(@Args('id') id: string) {
  //   return this.catsService.findById(id);
  // }
  @Mutation(() => CatType)
  async Createcat(@Args('input') input: CatInput): Promise<CatType> {
    const cat = await this.catsService.create(input);
    return cat as CatType;
    }

  // @Mutation(() => CatType)
  // async updateCat(@Args('id') id: string, @Args('input') input: CatInput) {
  //   return this.catsService.update(id, input);
  // }
  // @Mutation(() => Boolean)
  // async deleteCat(@Args('id') id: string) {
  //   const result = await this.catsService.delete(id);
  //   return result.deleted;
  // }
}