import { ApiProperty } from "@nestjs/swagger";

export class CreatePricingDto {
    @ApiProperty()
    productCategory: CategoryType;
    @ApiProperty()
    productName: string;
    @ApiProperty()
    weather: string;
    @ApiProperty()
    marketDataFeeds: string;
    @ApiProperty()
    season: string;
    @ApiProperty()
    supply: number;
    @ApiProperty()
    demand: number;
    @ApiProperty()
    perishable: boolean;
    @ApiProperty()
    inventory : number;
}
