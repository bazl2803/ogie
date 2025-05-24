import { Display, Button } from '@/modules/core/design-system';
import { css } from '@styled-system/css';
import { grid } from '@styled-system/patterns';
import {
	IconFileExport,
	IconCirclePlus,
} from '@tabler/icons-react';

export function ProductsPageHeader() {
	return (
		<div
			className={grid({
				gridTemplateColumns: {
					base: '1fr auto',
					md: '1fr auto auto',
				},
				justifyItems: 'stretch',
				alignItems: 'center',
				rowGap: '4',
			})}
		>
			<Display size="3xl">Productos</Display>

			<Button
				variant="outline"
				shape="rounded"
				icon={<IconFileExport />}
			>
				Exportar
			</Button>

			<Button
				className={css({
					gridColumn: { base: '1/3', md: 'auto' },
				})}
				shape="rounded"
				icon={<IconCirclePlus size={64} />}
			>
				Nuevo Producto
			</Button>
		</div>
	);
}
