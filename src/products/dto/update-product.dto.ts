export class UpdateProductDto {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly size: number;
  readonly price: number;
}
