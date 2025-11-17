import { BaseForm } from "components/ResumeForm/Form";
import { Input, Textarea } from "components/ResumeForm/Form/InputGroup";
import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
import { changeProfile, selectProfile } from "lib/redux/resumeSlice";
import { ResumeProfile } from "lib/redux/types";

export const ProfileForm = () => {
  const profile = useAppSelector(selectProfile);
  const dispatch = useAppDispatch();
  const { name, email, phone, url, summary, location } = profile;

  const handleProfileChange = (field: keyof ResumeProfile, value: string) => {
    dispatch(changeProfile({ field, value }));
  };

  return (
    <BaseForm>
      <div className="grid grid-cols-6 gap-3">
        <Input
          label="Name"
          labelClassName="col-span-full text-sm font-semibold text-gray-800 dark:text-gray-200"
          name="name"
          placeholder="Enter your full name"
          value={name}
          onChange={handleProfileChange}
        />
        <Textarea
          label="Professional Summary"
          labelClassName="col-span-full text-sm font-semibold text-gray-800 dark:text-gray-200"
          name="summary"
          placeholder="Brief overview of your professional background and goals"
          value={summary}
          onChange={handleProfileChange}
        />
        <Input
          label="Email"
          labelClassName="col-span-4 text-sm font-semibold text-gray-800 dark:text-gray-200"
          name="email"
          placeholder="your.email@example.com"
          value={email}
          onChange={handleProfileChange}
        />
        <Input
          label="Phone"
          labelClassName="col-span-2 text-sm font-semibold text-gray-800 dark:text-gray-200"
          name="phone"
          placeholder="(123) 456-7890"
          value={phone}
          onChange={handleProfileChange}
        />
        <Input
          label="Website/Portfolio"
          labelClassName="col-span-4 text-sm font-semibold text-gray-800 dark:text-gray-200"
          name="url"
          placeholder="linkedin.com/in/yourname"
          value={url}
          onChange={handleProfileChange}
        />
        <Input
          label="Location"
          labelClassName="col-span-2 text-sm font-semibold text-gray-800 dark:text-gray-200"
          name="location"
          placeholder="City, State"
          value={location}
          onChange={handleProfileChange}
        />
      </div>
    </BaseForm>
  );
};
