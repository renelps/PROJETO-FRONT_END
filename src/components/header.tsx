"use client"
import styled from "styled-components";

import { Saira_Stencil_One } from "next/font/google";
import { PrimaryInputSearchIcon } from "./primary-input";
import { CartControl } from "./cart-control";
import { useFilter } from "@/Hooks/useFilter";

const sairaStencil = Saira_Stencil_One({ 
  weight: ['400'],
  subsets: ["latin"] 
}); 

interface HeaderProps  {

}
const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 160px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }
`
const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 4;
  font-size: 40px;
  line-height: 60px;
  
`
export function Header(props: HeaderProps) {
  const { search, setSearch}= useFilter()
  return (
    <TagHeader>
      <Logo className={sairaStencil.className}>Capputeeno</Logo>
      <div>
        <PrimaryInputSearchIcon
          value={search}
          handleChange={setSearch}
          placeholder="Procurando por algo específico?"
         />
        <CartControl />
      </div>
    </TagHeader>
  )
}