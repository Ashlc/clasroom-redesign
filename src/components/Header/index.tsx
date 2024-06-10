"use client"

import { Menu } from "@mui/icons-material"
import { Drawer, IconButton } from "@mui/material"
import Image from "next/image"
import { useState } from "react"
import ThemeSwitcher from "../ThemeSwitcher"

type Props = {}

const Index = (props: Props) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  return (
    <div className="w-full border-b-2 h-[60px] px-4 flex flex-row items-center justify-between">
      <div className="flex flex-row gap-4 items-center">
        <IconButton
          aria-label="Menu"
          onClick={() => setDrawerVisible(!drawerVisible)}>
          <Menu/>
        </IconButton>
        <Image src="/logo.svg" alt="Logo" height={36} width={36} />
        <p className="font-semibold text-lg">Classroom</p>
      </div>
      <ThemeSwitcher />
      <Drawer
        anchor="left"
        open={drawerVisible}
        onClose={() => setDrawerVisible(false)}
      >
        <div className="w-64 h-full bg-gray-100">
          <p>Drawer</p>
        </div>
      </Drawer>
    </div>
  )
}

export default Index;