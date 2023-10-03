import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";

export default function page() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-indigo-600">
          Policy
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Terms and conditions
        </h1>
        <p className="mt-6 text-xl leading-8">
          Presenting the Mosque ICU Limited Terms & Conditions Policy. ("Terms")
          This policy outlines how we govern your use of our website building
          platform and Mosque Display Software ("Services"). By using our
          Services, you agree to comply with these Terms. Please read them
          carefully.
        </p>
        <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
          <li className="flex gap-x-3">
            <CheckCircleIcon
              className="mt-1 h-5 w-5 flex-none text-indigo-600"
              aria-hidden="true"
            />
            <span>
              <strong className="font-semibold text-gray-900">
                Last Updated
              </strong>{" "}
              1st September 2023
            </span>
          </li>
        </ul>
        <div className="mt-10 max-w-2xl">
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            1. Acceptance of Terms{" "}
          </h2>
          <p className="mt-8">
            By accessing or using our Services, you agree to these Terms and
            enter into a binding agreement with Mosque ICU.
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            2. Use of Services{" "}
          </h2>
          <figure className="mt-10 border-l border-indigo-600 pl-9">
            <blockquote className="font-semibold text-gray-900">
              <p>
                A. Eligibility: You must be of legal age and have the legal
                capacity to enter into these Terms. By using our Services, you
                represent and warrant that you meet these requirements.
              </p>
            </blockquote>
          </figure>
          <figure className="mt-10 border-l border-indigo-600 pl-9">
            <blockquote className="font-semibold text-gray-900">
              <p>
                B. User Accounts: You may need to create an account to use
                certain features of our Services. You are responsible for
                maintaining the confidentiality of your account credentials and
                for all activities associated with your account.
              </p>
            </blockquote>
          </figure>

          <figure className="mt-10 border-l border-indigo-600 pl-9">
            <blockquote className="font-semibold text-gray-900">
              <p>
                C. Prohibited Activities: You agree not to engage in any
                activities that
              </p>
            </blockquote>

            <figcaption className="mt-6 flex gap-x-4">
              <div className="text-sm leading-6">
                Violate any applicable laws or regulations.{" "}
              </div>
            </figcaption>
            <figcaption className="mt-6 flex gap-x-4">
              <div className="text-sm leading-6">
                Infringe upon the rights of others, including intellectual
                property rights.
              </div>
            </figcaption>
            <figcaption className="mt-6 flex gap-x-4">
              <div className="text-sm leading-6">
                Involve hacking, scraping, or otherwise compromising the
                security or integrity of our Services.
              </div>
            </figcaption>
          </figure>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            3. Privacy{" "}
          </h2>
          <p className="mt-8">
            Your use of our Services is also governed by our Privacy Policy,
            which can be found [link to Privacy Policy]. By using our Services,
            you consent to the practices described in the Privacy Policy.{" "}
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            4. Intellectual Property{" "}
          </h2>
          <p className="mt-8">
            All content and materials available through our Services, including
            but not limited to text, graphics, logos, images, and software, are
            the property of Mosque ICU or its licensors and are protected by
            intellectual property laws.
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            5. Disclaimers{" "}
          </h2>
          <p className="mt-8">
            Our Services are provided "as is" and "as available" without
            warranties of any kind, whether express or implied. We do not
            guarantee the accuracy, completeness, or reliability of any content
            or information provided through our Services.
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            6. Limitation of Liability{" "}
          </h2>
          <p className="mt-8">
            In no event shall Mosque ICU be liable for any direct, indirect,
            incidental, special, consequential, or punitive damages arising out
            of or in connection with your use of our Services.
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            7. Indemnification{" "}
          </h2>
          <p className="mt-8">
            You agree to indemnify and hold Mosque ICU and its affiliates,
            officers, employees, and agents harmless from any claims,
            liabilities, damages, losses, or expenses arising out of your use of
            our Services or your violation of these Terms.
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            8. Modifications to Terms and Services{" "}
          </h2>
          <p className="mt-8">
            We reserve the right to modify these Terms and our Services at any
            time. If we make material changes to these Terms, we will provide
            notice through our Services. Your continued use of our Services
            after such modifications constitutes your acceptance of the updated
            Terms.
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            9. Termination{" "}
          </h2>
          <p className="mt-8">
            We may terminate or suspend your access to our Services at our sole
            discretion, without prior notice, for any reason, including if you
            violate these Terms.
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            10. Governing Law{" "}
          </h2>
          <p className="mt-8">
            These Terms shall be governed by and construed in accordance with
            the laws of [Jurisdiction], without regard to its conflict of law
            principles.
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Contact Us{" "}
          </h2>
          <p className="mt-8">
            If you have any questions or concerns about these Terms, please
            contact us at [contact information].
          </p>

          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon
              className="mt-0.5 h-5 w-5 flex-none text-gray-300"
              aria-hidden="true"
            />
            By using our Services, you agree to comply with these Terms and
            Conditions.
          </figcaption>
        </div>
      </div>
    </div>
  );
}
