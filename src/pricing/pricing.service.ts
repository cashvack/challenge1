import { Injectable } from '@nestjs/common';
import { CreatePricingDto } from './dto/create-pricing.dto';
import { UpdatePricingDto } from './dto/update-pricing.dto';

@Injectable()
export class PricingService {
  create(Pricing: CreatePricingDto) {
    let optimalPrice;
    
    if (Pricing.perishable === true) {
     optimalPrice= this.calculateAgainstWeatherIfPerishable( Pricing.weather, Pricing.season, Pricing.retailPrice);
    } 
    else {
    optimalPrice = this.calculateAgainstWeather( Pricing.weather, Pricing.season, Pricing.retailPrice);
    }

   const result= this.calculateAgainstSupply(Pricing.supply,Pricing.demand,Pricing.inventory,optimalPrice)
   const obj={message:'Optimal Price is calculated Sucessfully',optimalAvailablePrice:result}
    return obj;
  }
  
  calculateAgainstWeatherIfPerishable(
     weather,
    season,
    price
  ) {
    if (season === 'Summer') {
      
      if (weather === 'Sunny') {
          price = price - (price * 50) / 100;
      }
      else
        if (weather === 'Rainy') {
        price = price - (price * 10) / 100;
      }
      else
      if (weather === 'Cloudy') {
        price = price - (price * 20) / 100;
      }
    else      
      if (weather === 'Snow') {
        price = price - (price * 50) / 100;
      }
      

    } else
    if (season === 'Winter') {
      
      if (weather === 'Sunny') {
          price = price - (price * 50) / 100;
      }
      else
        if (weather === 'Rainy') {
        price = price - (price * 50) / 100;
      }
      else
      if (weather === 'Cloudy') {
        price = price - (price * 50) / 100;
      }
    else      
      if (weather === 'Snow') {
        price = price - (price * 50) / 100;
      }
      

      }
    else
    if (season === 'Autumn') {
      
      if (weather === 'Sunny') {
          price = price - (price * 10) / 100;
      }
      else
        if (weather === 'Rainy') {
        price = price - (price * 15) / 100;
      }
      else
      if (weather === 'Cloudy') {
        price = price - (price * 20) / 100;
      }
    else      
      if (weather === 'Snow') {
        price = price + (price * 20) / 100;
      }
      
   }
    else if (season === 'Spring') {
      
      if (weather === 'Sunny') {
          price = price - (price * 50) / 100;
      }
      else
        if (weather === 'Rainy') {
        price = price - (price * 50) / 100;
      }
      else
      if (weather === 'Cloudy') {
        price = price - (price * 50) / 100;
      }
    else      
      if (weather === 'Snow') {
        price = price - (price * 50) / 100;
      }
      

    }
      
      return price;
  }


  calculateAgainstWeather(
    weather,
   season,
   price
 ) {
   if (season === 'Summer') {
     
     if (weather === 'Sunny') {
         price = price - (price * 50) / 100;
     }
     else
       if (weather === 'Rainy') {
       price = price - (price * 50) / 100;
     }
     else
     if (weather === 'Cloudy') {
       price = price - (price * 50) / 100;
     }
   else      
     if (weather === 'Snow') {
       price = price - (price * 50) / 100;
     }
     

   } else
   if (season === 'Winter') {
     
     if (weather === 'Sunny') {
         price = price - (price * 50) / 100;
     }
     else
       if (weather === 'Rainy') {
       price = price - (price * 50) / 100;
     }
     else
     if (weather === 'Cloudy') {
       price = price - (price * 50) / 100;
     }
   else      
     if (weather === 'Snow') {
       price = price - (price * 50) / 100;
     }
     

     }
   else
   if (season === 'Autumn') {
     
     if (weather === 'Sunny') {
         price = price - (price * 50) / 100;
     }
     else
       if (weather === 'Rainy') {
       price = price - (price * 50) / 100;
     }
     else
     if (weather === 'Cloudy') {
       price = price - (price * 50) / 100;
     }
   else      
     if (weather === 'Snow') {
       price = price - (price * 50) / 100;
     }
     
  }
   else if (season === 'Spring') {
     
     if (weather === 'Sunny') {
         price = price - (price * 50) / 100;
     }
     else
       if (weather === 'Rainy') {
       price = price - (price * 50) / 100;
     }
     else
     if (weather === 'Cloudy') {
       price = price - (price * 50) / 100;
     }
   else      
     if (weather === 'Snow') {
       price = price - (price * 50) / 100;
     }
     

   }
     
     return price;
 }

  
  calculateAgainstSupply(supply: number, demand: number, inventory: number,price:number) { 
   console.log('price in calculate supply',price);
   
    if (supply > demand) {
      if (inventory > demand) {
        price = price - (price * 10) / 100;
      }
      else if (inventory < demand) {
        price = price + (price * 10) / 100;
      }
    }
    else if (supply < demand) {
      if (inventory > demand) {
        price = price + (price * 20) / 100;
      }
      else if (inventory < demand) {
        price = price + (price * 50) / 100;
      }
    }
    return price;
  }
  
  
}
