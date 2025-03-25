import {
    Alert,
    AlertDescription,
    AlertTitle,
  } from "@/components/ui/alert"
import { ShieldAlert } from "lucide-react"


function CustomAlert({balance}:{balance?:number}) {
  return <Alert variant={'destructive'}>
  <ShieldAlert className="h-4 w-4" />
  <AlertTitle>Banck Balance</AlertTitle>
  <AlertDescription>
    Banck Balance Can't be 0
  </AlertDescription>
</Alert>
}

export default CustomAlert