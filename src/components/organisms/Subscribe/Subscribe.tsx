import ContentField from '@/components/molecules/ContentField/ContentField';
import EmailSubmit from '@/components/molecules/EmailSubmit/EmailSubmit';
import Header from '@/components/molecules/Header/Header';
import WelcomeMessage from '@/components/molecules/WelcomeMessage/WelcomeMessage';

const Subscribe = () => {
	return (
		<div>
			<Header />
			<div className="flex w-full flex-col items-center justify-center">
				<ContentField>
					<WelcomeMessage
						title="Subscribe to Our Newsletter"
						message="This newsletter will keep you updated with the latest news and updates."
					/>
					<EmailSubmit />
					<WelcomeMessage
						title="Verify Your Email"
						message="You will receive a confirmation email shortly."
					/>
					<WelcomeMessage
						title="Unsubscribe"
						message="If you wish to unsubscribe, please click the link below."
					/>
					<WelcomeMessage
						title="Send Now"
						message="Click the button below to send your email immediately."
					/>
				</ContentField>
			</div>
		</div>
	);
};

export default Subscribe;
