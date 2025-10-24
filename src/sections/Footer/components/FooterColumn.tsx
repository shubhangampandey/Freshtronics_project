export type FooterColumnProps = {
  title: string;
  address: string;
  phoneLabel: string;
  phoneNumber: string;
  phoneHref: string;
  email: string;
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div className="relative box-border caret-transparent flex float-left w-full md:w-[33.3333%]">
      <div className="bg-no-repeat bg-cover box-border caret-transparent flex flex-col justify-start w-full mx-[1.92%] md:mx-[5.76%]">
        <div className="items-center box-border caret-transparent my-2.5">
          <h3 className="text-zinc-900 font-bold box-border caret-transparent leading-[23.4px] text-left font-roboto">
            {props.title}
          </h3>
        </div>
        <div className="text-sm box-border caret-transparent leading-[24.5px]">
          <p className="box-border caret-transparent my-3.5">
            {props.address}
            <br className="box-border caret-transparent" />
            <strong className="font-bold box-border caret-transparent">
              {props.phoneLabel}:
            </strong>
            <a
              href={props.phoneHref}
              className="text-zinc-900 box-border caret-transparent hover:text-emerald-800 hover:border-emerald-800"
            >
              {props.phoneNumber}
            </a>
            <br className="box-border caret-transparent" />
            <strong className="font-bold box-border caret-transparent">
              {" "}
              Email:
            </strong>
            <strong className="font-bold box-border caret-transparent">
              <a
                href={`mailto://${props.email}`}
                className="text-zinc-900 box-border caret-transparent hover:text-emerald-800 hover:border-emerald-800"
              >
                {props.email}
              </a>
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};
