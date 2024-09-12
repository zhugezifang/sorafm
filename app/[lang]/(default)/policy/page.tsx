import { Metadata } from "next";
import { getDictionary } from "@/services/i18n";

export const runtime = 'edge';

export async function generateMetadata({
  params,
}: {
  params: { lang: string; hotel: string };
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang);
  const data = dict[params.hotel];
  return {
    title:`${data.title}——${dict.brand.title}`,
    description: `${data.des}`,
  };
}

export default async function ({
  params,
}: {
  params: { lang: string; hotel: string };
}) {
  const dict = await getDictionary(params.lang);

  return (
    <div className="mx-auto mt-4 max-w-full sm:mt-4 sm:px-0 lg:px-0">
        <div className="max-w-3xl mx-auto">
                <div
                    className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                    <div className="">
                        <h1 className="text-gray-900 font-bold text-4xl">Privacy Policy
                        </h1>
                        <hr/>
                        <p className="text-base leading-8 my-5">
                            Welcome to visit our products. <strong>https://corporate-codes.online</strong> （Including services provided by Website and other products, hereinafter referred to as "products and services"）It is developed and operated by <strong>corporate-codes.online</strong> (hereinafter referred to as "we"). Ensuring the data security and privacy protection of users is our primary task. This privacy policy specifies the data you collect when accessing and using our products and services and the processing methods.
                        </p>
                        <p className="text-base leading-8 my-5 font-bold">
                            Information We Collect
                        </p>
                        <p className="text-base leading-8 my-5">
                            We use the information we collect to provide and improve the Service, to communicate with you, and to personalize your experience. We may also use the information for research and analytics purposes, and to comply with legal obligations.
                        </p>
                        <p className="text-base leading-8 my-5 font-bold">
                            Sharing of Your Information
                        </p>
                        <p className="text-base leading-8 my-5">
                            We may share your personal information with third-party service providers who assist us in operating the Service, such as hosting providers and customer support services. We may also share your information if required by law or to protect our rights and property.
                        </p>
                        <p className="text-base leading-8 my-5 font-bold">
                            Data Security
                        </p>
                        <p className="text-base leading-8 my-5">
                            We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.
                        </p>
                        <p className="text-base leading-8 my-5 font-bold">
                            Changes to This Policy
                        </p>
                        <p className="text-base leading-8 my-5">
                            We may update this Policy from time to time. If we make material changes, we will notify you by email or by posting a notice on the Service prior to the effective date of the changes.
                        </p>
                        <p className="text-base leading-8 my-5 font-bold">
                            Contact Us
                        </p>
                        <p className="text-base leading-8 my-5">
                            If you have any questions or concerns about this Policy, please contact us at <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="3f47565e504e564a0d0f0e0848467f58525e5653115c5052">[email&#160;protected]</a>
                        </p>
                    </div>     
                </div>
        </div>
    </div>
  );
}
