export class CreateProductDto {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly size: number;
  readonly price: number;
}
