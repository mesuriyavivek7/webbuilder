import prisma from '@/lib/prisma'


type Props = {}

export default async function User(props: Props){
   const user = await prisma.user.findMany()
   console.log(user)
  return (
    <div>Page</div>
  )
}