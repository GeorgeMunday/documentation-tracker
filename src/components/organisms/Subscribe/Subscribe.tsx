import ContentField from '@/components/molecules/ContentField/ContentField';
import EmailSubmit from '@/components/molecules/EmailSubmit/EmailSubmit';
import Header from '@/components/molecules/Header/Header';
import SendNow from '@/components/molecules/SendNow/SendNow';
import Unsubscribe from '@/components/molecules/Unsubscribe/Unsubscribe';
import VerifyEmail from '@/components/molecules/VerifyEmail/VerifyEmail';
import WelcomeMessage from '@/components/molecules/WelcomeMessage/WelcomeMessage';
import type { FormEventHandler } from 'react';

type SubscribeProps = {
	onSubscribe: FormEventHandler<HTMLFormElement>;
	onVerify: FormEventHandler<HTMLFormElement>;
	onSendNow: FormEventHandler<HTMLFormElement>;
	onUnsubscribe: FormEventHandler<HTMLFormElement>;
	subscribeMessage?: string;
	verifyMessage?: string;
	sendNowMessage?: string;
	unsubscribeMessage?: string;
	subscribeIsError?: boolean;
	verifyIsError?: boolean;
	sendNowIsError?: boolean;
	unsubscribeIsError?: boolean;
};

const Subscribe = ({
	onSubscribe,
	onVerify,
	onSendNow,
	onUnsubscribe,
	subscribeMessage,
	verifyMessage,
	sendNowMessage,
	unsubscribeMessage,
	subscribeIsError,
	verifyIsError,
	sendNowIsError,
	unsubscribeIsError,
}: SubscribeProps) => {
	return (
		<div>
			<Header />
			<div className="flex w-full flex-col items-center justify-center">
				<ContentField>
					<WelcomeMessage
						title="Subscribe to Our Newsletter"
						message="Get the latest documentation changes delivered to your inbox."
					/>
					<EmailSubmit onSubmit={onSubscribe} message={subscribeMessage} isError={subscribeIsError} />
					<WelcomeMessage
						title="Verify Your Email"
						message="Confirm your address to finish subscribing."
					/>
					<VerifyEmail onSubmit={onVerify} message={verifyMessage} isError={verifyIsError} />
					<WelcomeMessage
						title="Send Now"
						message="Prefer not to wait? Send the newest update immediately."
					/>
					<SendNow onSubmit={onSendNow} message={sendNowMessage} isError={sendNowIsError} />
					<WelcomeMessage
						title="Unsubscribe"
						message="Stop receiving documentation updates whenever you choose."
					/>
					<Unsubscribe onSubmit={onUnsubscribe} message={unsubscribeMessage} isError={unsubscribeIsError} />
				</ContentField>
			</div>
		</div>
	);
};

export default Subscribe;
