import React from "react"

const HeaderSocials = () => {
  return (
    <div className="flex gap-x-7 m-2 text-4xl ">
        <a className="text-blue-200 duration-75 hover:text-green-300" href="https://instagram.com/andzuo" target="_blanck">
        <i class="fa-brands fa-instagram"></i>
        </a>

        <a className="text-blue-200 duration-75 hover:text-green-300" href="https://www.linkedin.com/in/anderson-medeiros-dev/" target="_blanck">
        <i class="fa-brands fa-linkedin"></i>
        </a>

        <a className="text-blue-200 duration-75 hover:text-green-300" href="https://github.com/Andzuo" target="_blanck">
        <i class="fa-brands fa-github"></i>
        </a>
    </div>
  )
}

export default HeaderSocials