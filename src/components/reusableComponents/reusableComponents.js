import { SideIconItem,NavIconContainer,UserImage } from "../styledComponents/styleComponents"
export const styledIcon = (Icon)=>{
    return (
        <SideIconItem>
            {Icon}
        </SideIconItem>
    )
}
export const styledNavIcon = (Icon)=>{
    return (
        <NavIconContainer>
            {Icon}
        </NavIconContainer>
    )
}

export const userLogo = (src)=>{
    return(
        <UserImage src={src}/>
    )
}

