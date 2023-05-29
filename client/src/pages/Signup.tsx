import { useRef } from "react"
import { Input } from "../components/Input"
import { Button } from "../components/Button"

export function Signup() {
  const userNameRef = useRef<HTMLInputElement>(null)
  const NameRef = useRef<HTMLInputElement>(null)
  const ImageUrlRef = useRef<HTMLInputElement>(null)
  return (
    <>
      <h1 className="text-3xl font-bold mb-8 text-center">Sign up</h1>
      <form className="grid grid-cols-[auto,1fr] minmax(2rem,1fr) gap-x-3 gap-y-5 items-center justify-items-end">
        <label htmlFor="userName">Username</label>
        <Input id="userName" pattern="\S*" required ref={userNameRef} />
        <label htmlFor="Name">Name</label>
        <Input id="Name" ref={NameRef} />
        <label htmlFor="ImageUrl">Image Url</label>
        <Input id="ImageUrl" type="url" ref={ImageUrlRef} />
        <Button type="submit" className="col-span-full ">
          Sign Up
        </Button>
      </form>
    </>
  )
}
