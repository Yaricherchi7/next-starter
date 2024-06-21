import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

import DeleteIcon from "@/app/assets/icon/deleteIcon";
import FileEditIcon from "@/app/assets/icon/editIcon";

function CardComponent({
  title,
  description,
  category
}: {
  title: string;
  description: string;
  category: string;
}) {
  return (
    <Card key="1" className="w-full max-w-sm rounded-lg border">
      <CardHeader className="rounded-t-lg">
        <div className="flex items-center justify-between p-4">
          <Badge variant="outline" className="w-max">
            {category}
          </Badge>
          <div>
            <CardTitle className="text-base">{title}</CardTitle>
            <CardDescription className="text-sm">{description}</CardDescription>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 p-4">
          <Button size="sm" variant="outline">
            <FileEditIcon className="size-4" />
            Modifica
          </Button>
          <Button size="sm" variant="outline">
            <DeleteIcon className="size-4" />
            Elimina
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
}

export default CardComponent;
