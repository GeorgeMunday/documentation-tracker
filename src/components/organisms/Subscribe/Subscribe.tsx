import ContentField from '@/components/molecules/ContentField/ContentField';
import EmailSubmit from '@/components/molecules/EmailSubmit/EmailSubmit';
import Header from '@/components/molecules/Header/Header';
import SendNow from '@/components/molecules/SendNow/SendNow';
import VerifyEmail from '@/components/molecules/VerifyEmail/VerifyEmail';
import WelcomeMessage from '@/components/molecules/WelcomeMessage/WelcomeMessage';

const Subscribe = () => {
	return (
		<div>
			<Header />
			<div className="flex w-full flex-col items-center justify-center">
				<ContentField>
					<WelcomeMessage
						title="Subscribe to Our Newsletter"
						message="Get the latest documentation changes delivered to your inbox."
					/>
					<EmailSubmit />
					<WelcomeMessage
						title="Verify Your Email"
						message="Confirm your address to finish subscribing."
					/>
					<VerifyEmail />
					<WelcomeMessage
						title="Send Now"
						message="Prefer not to wait? Send the newest update immediately."
					/>
					<SendNow />
				</ContentField>
			</div>
		</div>
	);
};

export default Subscribe;
