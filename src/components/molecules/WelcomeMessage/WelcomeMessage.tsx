import Text from '@/components/atoms/Text/Text';

type WelcomeMessageProps = {
  title?: string;
  message?: string;
};

const WelcomeMessage = ({ title, message }: WelcomeMessageProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-3 px-2 py-4 text-center sm:gap-4">
      <Text size="lg" weight="bold" color="black">
        {title || "Welcome Back to DocTracker!"}
      </Text>
      <Text size="md" weight="normal" color="gray-500">
        {message || "Your one-stop solution for tracking and managing your documentation."}
      </Text>
    </div>
  );
};

export default WelcomeMessage;