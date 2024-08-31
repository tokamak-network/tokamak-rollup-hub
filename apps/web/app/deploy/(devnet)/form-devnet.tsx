import { FormInput } from '@/components/inputs/form-input';

export function FormDevnet() {
  return (
    <form>
      <div className="flex flex-col gap-[30px] rounded-2xl bg-gradient-card p-5">
        <FormInput
          type="text"
          label="Rollup Name"
          name="rollup-name"
          placeholder="Sample Name"
          required={true}
        />
        <FormInput
          type="number"
          label="Chain ID"
          name="chain-id"
          placeholder="ex. 111551119090"
          required={true}
        />
      </div>
      <div></div>
    </form>
  );
}
