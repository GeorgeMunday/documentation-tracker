import Text from "../../atoms/Text/Text";
import Input from "../../atoms/Input/Input";
import { FaCheck } from 'react-icons/fa6';







const VerifyEmail = () => {
  return (
        <div className="flex w-full flex-col items-center gap-4 p-2 sm:p-4">
        <Text size="lg" color="black">Enter your email to verify your subscription:</Text>
        <div className="flex w-full max-w-md items-center gap-2">
          <Input
              name="email"
              type="email"
              placeholder="Enter your email"
          />
          <FaCheck className="h-6 w-6 text-green-500" />
        </div>
        <div className="text-center">
          <Text size="sm" color="gray-500">We will send you updates about recent changes every month.</Text>
        </div>
    </div>
  )
}

export default VerifyEmail