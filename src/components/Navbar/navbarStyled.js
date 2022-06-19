import styled from "styled-components";

export const NavWrapper = styled.nav `
position: sticky;
top: 0;
left: 0;
width: 100%;
position: relative;
z-index: 2;
/* border-bottom: 1px solid var(--blue); */
&::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--navBg);
    opacity: 0.02;
    backdrop-filter: blur(200px);
    z-index: -1;
    pointer-events: none;
}
`;

export const NavContent = styled.div `
padding: 20px 0;
display: flex;
align-items: center;
justify-content: space-between;
`;

export const NavLogo = styled.a `
display: flex;
align-items: center;
justify-content: center;
height: 60px;
font-weight: 600;
font-size: 23px;
line-height: 31px;
color: var(--blue);
@media (max-width:1024px) {
    font-size: 20px;
}
`;

export const NavLogoImg = styled.img `
height: 100%;
margin-right: 15px;
`;

export const NavList = styled.ul `
display: flex;
`;

export const NavItem = styled.li `
margin: 0px 20px;
`;

export const NavBarLink = styled.a `
font-weight: 600;
font-size: 16px;
line-height: 22px;
color: var(--white);
transition: .5s ease; 
&:hover{
    color: var(--blue);
}
`;

export const NavBtn = styled.div `
display: flex;
align-items: center;
justify-content: center;
button{
font-weight: 600;
font-size: 16px;
line-height: 22px;
}
`;