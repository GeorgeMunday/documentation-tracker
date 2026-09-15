import Text from '@/components/atoms/Text/Text';
import type { IChange } from '@/lib/models/Change';

type ChangeDetailsContentProps = {
  change: IChange;
};

const ChangeDetailsContent = ({ change }: ChangeDetailsContentProps) => {
  return (
      <div className="mt-6 flex flex-col justify-between gap-4">
        <div>
          <h1 className="mt-2 text-2xl font-bold text-black sm:text-3xl">{change.title}</h1>
        </div>

        <div className="border-y border-gray-200 py-4">
          <Text size="sm" weight="semibold" color="gray-500">
            Changed on
          </Text>
          <time dateTime={change.date} className="mt-1 block text-black">
            {new Date(change.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-black">Description</h2>
          <p className="mt-2 whitespace-pre-wrap leading-7 text-gray-700">{change.description}</p>
        </div>
      </div>
  );
};

export default ChangeDetailsContent;