import searchSpecies from '../../TPLScraper';

test('Testing a search for Eichhornia azurea species', async () => {
  const result = await searchSpecies('Eichhornia azurea');
  expect(result).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ name: 'Eichhornia azurea' }),
      expect.objectContaining({ name: 'Eichhornia azurea var. rhizantha' }),
    ]),
  );
});

test('Testing a search for a nonexistent species', async () => {
  const result = await searchSpecies('Lorem ipsum');
  expect(result).toEqual([]);
});

test('Testing a search for a blank input', async () => {
  try {
    await searchSpecies(' ');
  } catch (error) {
    expect(error.message).toBe('A species name is required');
  }
});
