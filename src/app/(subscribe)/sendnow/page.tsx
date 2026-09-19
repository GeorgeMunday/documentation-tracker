import Header from '@/components/molecules/Header/Header';
import SendNow from '@/components/molecules/SendNow/SendNow';

const Page = () => (
	<>
		<Header />
		<main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-10">
			<div className="w-full max-w-xl">
				<h1 className="mb-2 text-2xl font-semibold text-gray-900">Send the latest update</h1>
				<p className="mb-6 text-gray-500">Get the newest documentation changes in your inbox now.</p>
				<SendNow />
			</div>
		</main>
	</>
);

export default Page;
