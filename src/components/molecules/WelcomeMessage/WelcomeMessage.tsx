import Text from '@/components/atoms/Text/Text';

type WelcomeMessageProps = {
  title?: string;
  message?: string;
  danger?: boolean;
};

const WelcomeMessage = ({ title, message, danger }: WelcomeMessageProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-3 px-2 py-4 text-center sm:gap-4">
      <Text size="lg" weight="bold" color={danger ? "red-500" : "black"}>
        {title || "Welcome Back to DocTracker!"}
      </Text>
      <Text size="md" weight="normal" color={danger ? "red-500" : "gray-500"}>
        {message || "Your one-stop solution for tracking and managing your documentation."}
      </Text>
    </div>
  );
};

export default WelcomeMessage;