import { useRef } from "react"
import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { useAuth } from "../context/AuthContext"
import { FormEvent } from "react"

export function Signup() {
  const { signup } = useAuth()
  const userNameRef = useRef<HTMLInputElement>(null)
  const NameRef = useRef<HTMLInputElement>(null)
  const ImageUrlRef = useRef<HTMLInputElement>(null)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (signup.isLoading) return
    const username = userNameRef.current?.value
    const name = NameRef.current?.value
    const imageUrl = ImageUrlRef.current?.value
    if (username == null || username === "" || name == null || name === "") {
      return

      signup.mutate({
        id: username,
        name,
        image: imageUrl,
      })
    }
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-8 text-center">Sign up</h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-[auto,1fr] minmax(2rem,1fr) gap-x-3 gap-y-5 items-center justify-items-end"
      >
        <label htmlFor="userName">Username</label>
        <Input id="userName" pattern="\S*" required ref={userNameRef} />
        <label htmlFor="Name">Name</label>
        <Input id="Name" ref={NameRef} />
        <label htmlFor="ImageUrl">Image Url</label>
        <Input id="ImageUrl" type="url" ref={ImageUrlRef} />
        <Button
          disabled={signup.isLoading}
          type="submit"
          className="col-span-full "
        >
          {signup.isLoading ? "Loading..." : "Sign up"}
        </Button>
      </form>
    </>
  )
}
