import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';
import Text from '@/components/atoms/Text/Text';
import { FaCheck } from 'react-icons/fa6';

const SendNow = () => {
  return (
    <form className="flex w-full flex-col items-center gap-4 p-2 sm:p-4">
      <Text size="lg" color="black">Enter your email to send the latest update now:</Text>
      <div className="flex w-full max-w-md items-center gap-2">
        <Input
          name="email"
          type="email"
          placeholder="Enter your email"
          required
        />
        <Button
          type="submit"
          variant="icon"
          ariaLabel="Send now"
          title="Send now"
        >
          <FaCheck className="h-6 w-6" aria-hidden="true" />
        </Button>
      </div>
      <div className="text-center">
        <Text size="sm" color="gray-500">We will send the latest documentation changes to this address.</Text>
      </div>
    </form>
  )
}

export default SendNow