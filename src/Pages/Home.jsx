import { Carousal } from "../Components/Carousal/Carousal"
import { Channels } from "../Components/channels/Channels"
import { Freatured } from "../Components/featured/Freatured"
import { Header } from "../Components/header/Header"
import { Shows } from "../Components/Shows/Shows"
import { Tags } from "../Components/tags/Tags"
export const Home= ()=>{
    return<>
        <Header/>
        <Tags/>
        <Carousal/>
        <Channels/>
        <Freatured/>
        <Shows/>
        <Shows/>
        <Shows/>
      
        
        
    </>
}