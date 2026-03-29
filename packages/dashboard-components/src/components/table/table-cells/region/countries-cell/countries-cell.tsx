import { Badge, Text } from "@zevaguillo/ui-components";

export interface CountriesCellProps {
  countries?: Array<{ iso_2?: string; display_name?: string }>;
}

export const CountriesCell = ({ countries }: CountriesCellProps) => {
  if (!countries || countries.length === 0) return <Text size="small">-</Text>;

  return (
    <div className="flex flex-wrap gap-1">
      {countries.slice(0, 3).map((country, index) => (
        <Badge key={index} variant="default">
          {country.iso_2?.toUpperCase()}
        </Badge>
      ))}
      {countries.length > 3 && (
        <Badge variant="default">+{countries.length - 3}</Badge>
      )}
    </div>
  );
};
