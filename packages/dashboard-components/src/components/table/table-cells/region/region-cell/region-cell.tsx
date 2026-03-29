import { Text } from "@zevaguillo/ui-components";

export interface RegionCellProps {
  region?: {
    name?: string;
    countries?: Array<{ iso_2?: string }>;
  };
}

export const RegionCell = ({ region }: RegionCellProps) => {
  if (!region?.name) return <Text size="small">-</Text>;

  const countries = region.countries
    ?.map((c) => c.iso_2?.toUpperCase())
    .join(", ");

  return (
    <div>
      <Text size="small">{region.name}</Text>
      {countries && (
        <Text size="xsmall" className="text-gray-500">
          {countries}
        </Text>
      )}
    </div>
  );
};
