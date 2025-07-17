import { Display, Button } from '@/modules/core/design-system';
import { Input } from '@/modules/core/design-system/input/input';
import { css } from '@styled-system/css';
import { flex, stack } from '@styled-system/patterns';
import { IconFileExport, IconCirclePlus, IconFilter } from '@tabler/icons-react';

const ProductsPageHeaderStyles = css({
	display: 'flex',
	flexDirection: 'column',
	justifyItems: 'stretch',
	alignItems: 'center',
	rowGap: '4',
});

export function ProductsPageHeader() {
	const styles = ProductsPageHeaderStyles;
	return (
		<div className={styles}>
			<div className={flex({ direction: 'row', flexWrap: 'nowrap', gap: 4, w: 'full' })}>
				<Display
					className={css({ flexGrow: 1 })}
					size="3xl"
				>
					Productos
				</Display>
				<div className={stack({ direction: 'row', gap: 4 })}>
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
			</div>

			<div className={css({ display: 'flex', flexWrap: 'nowrap', flexDirection: 'row', gap: 4 })}>
				<Input placeholder="Buscar productos" />

				<Button
					variant="outline"
					shape="rounded"
					size="sm"
					icon={<IconFilter />}
				>
					Filtrar
				</Button>
			</div>
		</div>
	);
}
