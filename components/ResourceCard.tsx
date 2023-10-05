import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  title: string;
  id: string;
  image: string;
  downloadNumber: number;
}
const ResourceCard = ({ id, title, image, downloadNumber }: Props) => {
  return (
    <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
      <Link href={`/resources/${id}`}>
        <CardHeader className="flex-center flex-col gap-2.5 !p-0">
          <div className="h-fit w-full">
            <Image
              src={image}
              className="w-full rounded-md object-cover"
              width={384}
              height={440}
              alt={title}
            />
          </div>
          <CardTitle className="paragraph-semibold line-clamp-1 text-left text-white">
            {title}
          </CardTitle>
        </CardHeader>
      </Link>
      <CardContent className="flex-between mt-4 p-0">
        <div className="flex-center body-medium gap-1.5 text-white">
          <Image src="/downloads.svg" alt="download" width={20} height={20} />
          {downloadNumber}
        </div>
        <Link
          href={`/resources/${id}`}
          className="flex-center text-gradient_purple-blue body-semibold gap-1.5"
        >
          Download Now{" "}
          <Image src="/arrow-blue.svg" alt="arrow" width={13} height={0} />
        </Link>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
