import Header from '@/components/molecules/Header/Header';
import VerifyEmail from '@/components/molecules/VerifyEmail/VerifyEmail';

const Page = () => (
	<>
		<Header />
		<main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-10">
			<div className="w-full max-w-xl">
				<h1 className="mb-2 text-2xl font-semibold text-gray-900">Verify your subscription</h1>
				<p className="mb-6 text-gray-500">Enter the email address you used to subscribe.</p>
				<VerifyEmail />
			</div>
		</main>
	</>
);

export default Page;
